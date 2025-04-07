
const ReactAppFromCDN = ()=>{
    return (
        <div className="body">
            <h1>Topics covered</h1>

            <p>The following is a list of all the topics we cover in the MDN learning area.</p>
            
            <br></br>

            <a href="#">Getting started with the web</a>

            <blockquote>Provides a practical introduction to web development for complete beginners.</blockquote>

            <br></br><br></br>
            
            <a href="#">HTML - Structuring the web</a>

            <blockquote>HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.</blockquote>

            <br></br><br></br>
            
            <a href="#">CSS - Styling the web</a>

            <blockquote>CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.</blockquote>
        </div>
    )
}
   
ReactDOM.render(<ReactAppFromCDN />, document.querySelector('#root'));
