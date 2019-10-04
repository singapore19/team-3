import React, { Component } from "react";
import {Card, CardHeader, CardBody} from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist//react-bootstrap-table-all.min.css';
import data from './_Scheduledata';

class Schedules extends Component{

    constructor(props){
        super(props)
        this.state = {
            schedules: data.rows
        }
    }

    render(){
        return(
            <div>
                <Card>
                    <CardHeader>
                        Schedule for driver{' '} bob
                        <div className="card-header-actions">
                           {/*} <Button onClick={this.toggleAddModal} className="btn btn-pill btn-success" type="button">
                                <i className="fa fa-plus"></i>&nbsp;Add personnel</Button>*/}
                        </div>
                    </CardHeader>
                    <CardBody>
                        <BootstrapTable data={this.state.schedules} version="4" striped hover pagination search options={this.options}>
                            <TableHeaderColumn isKey dataField="id" dataSort>#id</TableHeaderColumn>
                            <TableHeaderColumn dataField="date_delivery" dataSort>Date</TableHeaderColumn>
                            <TableHeaderColumn dataField="time_delivery">Time</TableHeaderColumn>
                            <TableHeaderColumn dataField="start_address" dataSort>Start</TableHeaderColumn>
                            <TableHeaderColumn dataField="end_address">End address</TableHeaderColumn>
                            <TableHeaderColumn dataField="delivery_type">type</TableHeaderColumn>
                            <TableHeaderColumn dataField="payload">payload</TableHeaderColumn>
                        </BootstrapTable>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
export default Schedules