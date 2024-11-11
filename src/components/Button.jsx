import PropTypes from 'prop-types'
import CryptoJS from "crypto-js"

export default function Button({setHash}) {
  const hashImage = (file, hashType = "MD5") => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const base64String = event.target.result;
        let hash;

        if (hashType === "MD5") {
          hash = CryptoJS.MD5(base64String).toString();
        } else if (hashType === "SHA256") {
          hash = CryptoJS.SHA256(base64String).toString();
        } else {
          reject(new Error("Hash type tidak dikenali"));
        }

        resolve(hash);
      };

      reader.onerror = () => {
        reject(new Error("Gagal membaca file gambar"));
      };

      reader.readAsDataURL(file);
    });
  };

  function hashToScore(hash, min = 0, max = 100) {
    const hex = hash.slice(0, 8);
    const decimalValue = parseInt(hex, 16);
  
    const normalizedValue = Math.sqrt(decimalValue / 0xffffffff);
    const score = Math.floor(min + normalizedValue * (max - min));
    return score;
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const resultHash = await hashImage(file, "MD5");
        const score = hashToScore(resultHash, 0, 100);
        setHash(score);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };  

  return (
    <div>
      <label className="btn btn-primary">
        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden"/>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="main-grid-item-icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" x2="12" y1="3" y2="15" />
            </svg>
            Upload
      </label>
    </div>
  );
}

Button.propTypes = {
  setHash: PropTypes.func
}