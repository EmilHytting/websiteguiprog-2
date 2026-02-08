import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import ImageCard from './components/ImageCard/ImageCard';
import Image from './components/Image/Image';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Header title="✨ websiteguiprog-2 ✨" />
      <Content 
        paragraphOne="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        paragraphTwo="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        paragraphThree="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <ImageCard 
        title="Smuk Strandkant" 
        description="Et billede af en smuk strandkant med gylden solnedgang"
      >
        <Image 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Strand med bølger"
        />
      </ImageCard>
      <Footer 
        mail="emil153s@elev.techcollege.dk"
        phoneNumber="+45 23 93 39 97"
        address="Priorgade 24 1. Sal - 9000 Aalborg"
      />
    </div>
  );
}