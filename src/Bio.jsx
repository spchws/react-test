import './App.css'

function App() {
  return (
    <div>
    <Biomy/>
    </div>
  );
};

const Biomy = () => {
  return(
    <div id="app">
    <header id="head">
      <h1>H-Group x 47</h1>
    </header>
    <main>
      <div id="temperature">
        {/* <link rel="stylesheet" href="../../../../../Downloads/All/Me.jpeg"> */}
      </div>
      <div>
        <h1 class="bio">Supachai Wansen</h1>
        <p>"I am a graduate from Prince of Songkhla University (PSU) at Phuket, degree in Information Technology. My academic journey has been enriched by my experiences and achievements, particularly in the field of customer service, I embarked on a transformative three-month internship with an Apple authorized service provider following my graduation. This invaluable experience not only equipped me with an in-depth understanding of Apple products, both hardware and software,  Through my journey, I have developed a robust work ethic, adaptability, and a passion for ensuring unparalleled customer interactions."
        </p>
      </div>
    </main>
  </div>
  );
};


export default App;