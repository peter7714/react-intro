const App = () => (
    <div>
        <Person name="Peter" age={22} hobbies={['coding', 'gaming', 'skateboarding']}/>
        <Person name="Jimmy" age={14} hobbies={['bmx', 'gaming', 'comics']}/>
        <Person name="Aurora" age={21} hobbies={['exercising', 'Minecraft', 'swimming']}/>
    </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));