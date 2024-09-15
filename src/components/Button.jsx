function GetStartedButton( {link = "#", text = "Get Started" }) {
  return (
    <div className="flex justify-center">
      <a
        href={link}
        className="bg-blue hover:bg-neonBlue text-white font-bold py-4 px-8 rounded-full transition duration-300 ease-in-out"
      >
        {text}
      </a>
    </div>
  );
}

export default GetStartedButton;