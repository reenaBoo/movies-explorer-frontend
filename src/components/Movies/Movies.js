import React, {useEffect, useState} from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ButtonMore from '../ButtonMore/ButtonMore';
import './Movies.css';
import Preloader from "../Preloader/Preloader";

function Movies() {
    const [isLoading, setIsLoading] = useState(true);

    const timeoutPreload = () => {
        setIsLoading(false);
    }

    useEffect(() => {
        setTimeout(timeoutPreload, 3000);
        console.log(isLoading)
    }, [isLoading]);

  return (
      <>
          {isLoading ? <Preloader/> :
              <main className="movies">
                  <SearchForm/>
                  <MoviesCardList/>
                  <ButtonMore/>
              </main>
          }
      </>
  );
}

export default Movies;
