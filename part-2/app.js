const App = () => (
    <div>
        <Tweet username='cowboy12' firstName='Peter' date='04/17/23' msg='Wow, it rained all day'/>
        <Tweet username='goober22' firstName='Ellie' date='04/16/23' msg="I'm not prepared for finals tommorow"/>
        <Tweet username='cheesehead15' firstName='peter' date='04/15/23' msg="I can't believe i ran out of cheese"/>
    </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));