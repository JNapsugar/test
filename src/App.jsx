import React, { useState } from 'react';
import "./style.css"

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(1);
  const [gender, setGender] = useState('');
  const [occupation, setOccupation] = useState('');
  const [sector, setSector] = useState('Egészségügy');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  const sectors = [
    { id: 'egeszsegugy', label: 'Egészségügy' },
    { id: 'elelmiszeripar', label: 'Élelmiszeripar' },
    { id: 'epiteszipar', label: 'Építészipar' },
    { id: 'gazdasagi', label: 'Gazdasági' },
    { id: 'gepipar', label: 'Gépipar' },
    { id: 'informatika', label: 'Informatika' },
    { id: 'jogi', label: 'Jogi' },
    { id: 'mezogazdasagi', label: 'Mezőgazdasági' },
    { id: 'muveszeti', label: 'Művészeti' },
    { id: 'tudomanyos', label: 'Tudományos' },
    { id: 'vendeglatoi', label: 'Vendéglátói' },
    { id: 'filmipar', label: 'Filmipar' },
  ];

  const handleSubmit = () => {
    if (!name || !age || !gender || !occupation || !sector || !email || !password) {
      setError('Minden adat kitöltése kötelező!');
      return;
    }

    if (!/\d/.test(password) || !/[A-Z]/.test(password) || !/[a-z]/.test(password) || password.length < 5) {
      setError('Nem megfelelő jelszó!');
      return;
    }
    

    if (!(email.includes('@') && (email.includes('.com') || email.includes('.hu') || email.includes('.edu')))) {
      setError('Nem megfelelő email!');
      return;
    }

    const userData = {
      name,
      age,
      gender,
      occupation,
      sector,
      email,
    };

    console.log(userData);
    setError('');
    alert('Sikeres regisztráció!');
  };

  return (
    <div id="content">
      <video autoPlay muted loop id="hatter">
        <source src="./img/hatter3.mp4" type="video/mp4" />
      </video>
      <div className="form-content">
        <h1>Regisztráció</h1>
        
        <div>
          <img src="img/Icon/nev.png" className="icon" />
          <label htmlFor="name">Név:</label>
          <input id="name" type="text" className='textinput' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        
        <div>
          <img src="img/Icon/eletkor.png" className="icon" />
          <label htmlFor="age">Kor:</label>
          <input id="age" type="range" min="1" max="100" value={age} onChange={(e) => setAge(e.target.value)} />
          <input id="age-number" type="number" className='textinput' value={age} onChange={(e) => setAge(e.target.value)} />
        </div>

        <div>
          <img src="img/Icon/nem.png" className="icon" />
          <label>Nem:</label>
          <div>
            <label htmlFor="female">
              <input id="female" type="radio" name="gender" value="Nő" onChange={() => setGender('Nő')} checked={gender === 'Nő'} />
              Nő
            </label>
            <label htmlFor="male">
              <input id="male" type="radio" name="gender" value="Férfi" onChange={() => setGender('Férfi')} checked={gender === 'Férfi'} />
              Férfi
            </label>
            <label htmlFor="other">
              <input id="other" type="radio" name="gender" value="Egyéb" onChange={() => setGender('Egyéb')} checked={gender === 'Egyéb'} />
              Egyéb
            </label>
          </div>
        </div>



        <div>
          <img src="img/Icon/foglalkozas.png" className="icon" />
          <label htmlFor="occupation">Foglalkozás:</label>
          <input id="occupation" type="text" className='textinput' value={occupation} onChange={(e) => setOccupation(e.target.value)} />
        </div>

        <div>
          <img src="img/Icon/agazat.png" className="icon" />
          <label>Ágazat:</label>
          <div className="agazatok">
            {sectors.map((sectorItem) => (
              <div key={sectorItem.id} className={`agazat ${sector === sectorItem.id ? 'valasztottAgazat' : ''}`} onClick={() => setSector(sectorItem.id)}>
                <img src={`./img/agazatok/${sectorItem.id}.svg`} className="agazatIcon" alt={sectorItem.label} />
                <p>{sectorItem.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <img src="img/Icon/email.png" className="icon" />
          <label htmlFor="email">Email:</label>
          <input id="email" type="text" className='textinput' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <img src="img/Icon/jelszo.png" className="icon" />
          <label htmlFor="password">Jelszó:</label>
          <input id="password" className='textinput' type={passwordVisible ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
          <img className="icon" onClick={() => setPasswordVisible(!passwordVisible)} 
            src={passwordVisible ? "./img/Icon/jelszoLathato.svg" : "./img/Icon/jelszoRejtett.svg"} />
        </div>
        <button onClick={handleSubmit} id="regisztracioBtn">Regisztráció</button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default App;