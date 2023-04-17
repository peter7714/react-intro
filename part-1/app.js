const App = () => (
    <div>
        <FirstCompnent/>
        <NamedComponent name='Peter'/>
    </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));