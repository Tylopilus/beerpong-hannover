import React from "react"

class MemeGenerator extends React.Component {
    constructor(){
        super()

        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(res => {this.setState({allMemeImgs: res.data.memes})}
        )
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const randNum = parseInt(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum]

        this.setState({
            randomImg: randMemeImg.url
        })
    }

    render(){
        return (
            <React.Fragment>
                <form className="meme-form">
                <input type="text" name="topText" onChange={this.handleChange} placeholder="Top Text" value={this.state.topText}></input>
                <input type="text" name="bottomText" onChange={this.handleChange} placeholder="Bottom Text" value={this.state.bottomText}></input>
                <button onClick={this.handleSubmit}>Gen</button>
                </form>

                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </React.Fragment>
        )
    }
}

export default MemeGenerator