import { useApp } from '../context/AppContext';

const About = () => {
  const { about, loading } = useApp();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{about?.title}</h1>
      <p className="text-lg text-gray-700">{about?.description}</p>
    </div>
  );
};

export default About;
