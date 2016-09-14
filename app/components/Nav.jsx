var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();

    var searchVal = this.refs.input.value;

    if (searchVal.length > 0) {
      var encSearch = encodeURIComponent(searchVal);
      this.refs.input.value = '';
      window.location.hash = '#/?location='+ encSearch;
    }
  },
  render: function () {
    return (
      <div>
        <h2>Nav Comp</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
        <div>
          <form onSubmit={this.onSearch}>
            <ul>
              <li>
                <input ref="input" type="search" placeholder="Search weather by city"/>
              </li>
              <li>
                <input type="submit" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
