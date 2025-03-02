import React from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import HouseImg from '../assets/House.png';
import CatImg from '../assets/Cat.png';
import './Home.css';

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="home">
                <Link to="/notebook">
                    <img src={HouseImg} id="house_img" alt="Notebook" />
                </Link>
                <Link to="/todos">
                    <img src={CatImg} id="cat_img" alt="Todo List" />
                </Link>
            </div>
        </>
    )
};

export default Home;