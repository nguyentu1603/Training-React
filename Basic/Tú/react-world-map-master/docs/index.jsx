var React = require('react');
var ReactDOM = require('react-dom');
//import react-world-map
var WorldMap = require('../dist/index.js');


function YourMainComponent() {
  const [selected, setSelected] = React.useState(null);

  return (
    <>
      <h1> react world map </h1>
      <WorldMap selected={selected} onSelect={setSelected} />
      <pre style={{ marginLeft: '20px', border: '1px solid grey', padding: '10px', width: '40%'}}>{
`<WorldMap
  selected="sa"
  onSelect={ (continentCode) => setSelected(continentCode) }
/>`}
      </pre>
    </>
  );
}

ReactDOM.render(
  <YourMainComponent />,
  document.getElementById('react-app')
)
