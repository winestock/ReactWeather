var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built using React and Foundation.</p>
      <p>Here are some of the tools used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a>
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a>
        </li>
        <li>
          <a href="https://atom.io/">Atom Editor</a>
        </li>
        <li>
          <a href="http://heroku.com/">Heroku</a>
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
