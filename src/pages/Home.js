import Header from "../components/Header";
import Movies from "../components/Movies";
import styles from '../styles/Home.module.css';

function Home() {
  return ( 
    <div className={styles.home}>
        <Header/>
        <Movies/>
    </div>
  )
}

export default Home;
