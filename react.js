import React, { Component } from "react";
import { Navbar, Table, Form } from "react-bootstrap";

const initialForm = {
  id:1,
  queueType:'',
  startDate:'2011-08-19',
  endDate:'2011-08-19',
  week:'',
  startTime:'13:45:00',
  endTime:'13:45:00',
  capacity:0
}
export default class Hello extends Component {
  constructor(props){
    super(props);
    this.state = {
      collapseID: "",
      formArray:[
        {
          ...initialForm
        }
      ]
    };
  this.addNewForm = this.addNewForm.bind(this);
  }

  addNewForm = ()=>{
    let newForm = {...initialForm};
    newForm.id = this.state.formArray[this.state.formArray.length -1].id +1;
    this.setState(prevState =>{
      return {
        ...prevState,
        formArray:[...prevState.formArray, newForm]
      }
    })
  }

  setFormValue = (e, index)=>{
    let {formArray} = this.state;
    formArray[index][e.target.name] = e.target.value;
    this.setState({
      formArray
    })
  }

  removeForm=(id)=>{
    const formArray = this.state.formArray.filter(form => form.id != id)
    this.setState({formArray})
  }
  render() {
    return (
      <div>
        <div className="import">
          <h1>Import New Schedule</h1>
          <div className="importTable">
            <Table className="table table-hover" id="tables">
              <thead className="thead-dark">
                <tr>
                  <th>Queue</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Day of Week</th>
                  <th>Time Start</th>
                  <th>Time End</th>
                  <th>Capacity</th>
                </tr>
              </thead>
              <tbody>
              {this.state.formArray.map((form,index)=>(
                <tr key={form.id}>
                  <td>
                    <select name="queueType" 
                    defaultValue={form.queueType} 
                    onChange={()=>this.setFormValue(event,index)}>
                      <option>Veteran Affairs</option>
                      <option>Older Australians</option>
                      <option>Disability Sickness Carers</option>
                      <option>Report Employment Income</option>
                    </select>
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="date"
                      name="startDate"
                      defaultValue={form.startDate} 
                      onChange={()=>this.setFormValue(event,index)}
                      id="example-date-input"
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="date"
                      name="endDate"
                      defaultValue={form.endDate} 
                      onChange={()=>this.setFormValue(event,index)}
                      id="example-date-input"
                    />
                  </td>
                  <td>
                    <select name="week" defaultValue={form.week} 
                      onChange={()=>this.setFormValue(event,index)}>
                      <option>Monday</option>
                      <option>Tuesday</option>
                      <option>Wednesday</option>
                      <option>Thursday</option>
                      <option>Friday</option>
                      <option>Saturday</option>
                      <option>Sunday</option>
                    </select>
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="time"
                      name="startTime"
                      defaultValue={form.startTime} 
                      onChange={()=>this.setFormValue(event,index)}
                      id="example-time-input"
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="time"
                      name="endTime"
                      defaultValue={form.endTime} 
                      onChange={()=>this.setFormValue(event,index)}
                      id="example-time-input"
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      defaultValue={form.capacity} 
                      onChange={()=>this.setFormValue(event,index)}
                      name="capacity"
                      id="example-number-input"
                    />
                  </td>
                  <td>
                    <button type="button" onClick={()=>this.removeForm(form.id)}>- Remove</button>
                  </td>
                </tr>
                ))}
              </tbody>
            </Table>
            <button id="addRow" onClick={this.addNewForm}>+ Add</button>
          </div>
        </div>
        <pre>
        {JSON.stringify(this.state.formArray)}
        </pre>
      </div>
    );
  }
}