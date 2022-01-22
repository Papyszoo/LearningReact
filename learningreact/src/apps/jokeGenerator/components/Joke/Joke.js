function Joke({text}) {
    return(
    <div data-testid="joke-text">
        {text}
    </div>)
}

// export default ({ text }) => (
//     <div data-testid="joke-text">
//       {text}
//     </div>
//   );
export default Joke;