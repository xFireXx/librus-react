import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Articles from '../../components/Articles/Articles';
import ArticlesLeft from '../../components/Articles/ArticlesLeft/ArticlesLeft';
import ArticlesRight from '../../components/Articles/AritclesRight/ArticlesRight';
export default function Home() {
  return (
    <>
      <Navigation />
      <Articles title="Najnowsze wpisy">
        <ArticlesRight
          name="Co nowego"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
        <ArticlesLeft
          name="Zmiany w librusie"
          text="It is a long established fact that a reader will be distracted 
        by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters"
        />
        <ArticlesRight
          name="Where does it come from?"
          text="Contrary to popular belief, Lorem Ipsum is not simply random text. 
          It has roots in a piece of classical Latin literature from 45 BC, 
          making it over 2000 years old. Richard McClintock, 
          a Latin professor at Hampden-Sydney College in Virginia, 
          looked up one of the more obscure Latin words, consectetur, 
          from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
          discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
           of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. 
           This book is a treatise on the theory of ethics, very popular during the Renaissance. 
           The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32."
        />
      </Articles>
    </>
  );
}
