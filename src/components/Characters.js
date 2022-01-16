import React, {useState, useEffect} from 'react';
import styles from '../styles/Characters.module.css'
import Modal from './Modal';


function Characters(props) {

  const [isOpen, setIsOpen] = useState()
  const [characters, setCharacters] = useState([]) 
  const [loading, setLoading] = useState([true])

  
  const promises = props.movie.characters.map((url) =>
    fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    Promise.all(promises).then((res) => setCharacters(res));
    setLoading(false) 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]); 
  

 return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.movieTitle}>
            {props.movie.title}  
            <div>{props.movie.release_date}</div>
          </div>
          <button className={styles.btn}  onClick={() => setIsOpen(true)} key={props.movie.id}> See Characters </button>
        </div>
      </div>

      
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div>
            <h2>Characters from {props.movie.title}</h2>

            {loading && <h2>Loading...</h2>}

              {characters.sort((a,b) => a.name > b.name ? 1 : -1).map((char, index) =>
                      <p className={styles.char} key={index} > {char.name} </p> 
              )}
        </div>
      </Modal>
     
      
    </>
 )
}
export default Characters;