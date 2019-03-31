import React from "react"

class AddPost extends React.Component{

    constructor(){
        super()

        this.state = {
            setID: "",
            newName: "",
            list: [],
            loading: false,
            edit: false
        }
    }

    componentDidMount(){
        this.setState({loading: true})
        fetch("/api/urls")
        .then(res => res.json())
        .then(res => this.setState({
            loading: false, 
            list: res.data}))
    }

    handleChange = (event) => {
        const {id, value} = event.target
        this.setState(
            prev => {
                prev.list.map(e => {
                    if(parseInt(e.id) === parseInt(id)){
                        prev.list[e.id-1].name = value
                        console.log(prev.list[e.id-1].name)
                    }
                    return true
                })
                return prev
            }
        )
    }

    handleClick = (e) => {
        this.setState(
            prev => {
                prev.list.map(res => {
                    if(parseInt(res.id) === parseInt(e.id)){
                        prev.list[e.id-1].edit = !prev.list[e.id-1].edit
                        //console.log(prev.list[e.id-1].edit)
                        if(!prev.list[e.id-1].edit)
                            this.handleSubmit(e)
                    }

                    return true
                })
                return prev
            }
        )
    }

    handleSubmit = (e) =>{
        fetch('/api/urls/' + e.id, {
        method: 'PUT',
        body: JSON.stringify({"data": e.name}),
        headers: {
            "Content-Type": "application/json"
        }
        }).then(res => res)
        .catch(err => {console.log(err); return err});
    }

    editType = (e) => {
        if (e.edit)
        return (
          <input
            type="text"
            name={e.name}
            placeholder={e.name}
            value={e.name}
            id={e.id}
            onChange={this.handleChange}
          />
        );
  
      return <span>{e.name}</span>;
    }

    render(){
        return(
            <div style={{paddingTop: "56px"}}>
                <ul>
                    {this.state.loading ? "loading navigation" : this.state.list.map( e => {
                        return <li key={e.id}>{this.editType(e)} <i className="far fa-edit" onClick={() => this.handleClick(e)}/></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default AddPost