import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <h1 className="silk  text-amber-300 text-center  text-6xl pt-10">
        AdminSpamator 3000
      </h1>
      <div>
        <p className="text-white normalFont text-center w-2/4 mx-auto mt-14 font-bold">
          Hola estimado miembro del grupo, si estas harto de la injustica de los
          admins de mierda has llegado al lugar indicado con está página podrás
          spamear a los admins para decirles que hagan su trabajo.
        </p>
      </div>
    </div>
  );
};

export default Home;
