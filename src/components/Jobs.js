import React, { Component } from "react";
import {
    Card, CardHeader, CardBody, Button, Modal, ModalBody, ModalFooter, ModalHeader, Col,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Fade,
    Form,
    FormGroup,
    FormText,
    FormFeedback,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label,
    Row
} from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist//react-bootstrap-table-all.min.css';
import data from './_Jobdata';

const url = "http://54.254.210.52:8080/api/v1/jobs/";

class Jobs extends Component {

    constructor(props) {
        super(props)
        this.state = {
            jobs: data.rows
        }

        this.getJobs= this.getJobs.bind(this)
        this.getJobs()
    }
    async getJobs(){
        const result = await fetch(url)
        console.log(result);
    }



    render() {
        return (
            <div>
                <Card>
                    <CardHeader>
                        All submitted Jobs{' '}
                        <div className="card-header-actions">
                            {/*} <Button onClick={this.toggleAddModal} className="btn btn-pill btn-success" type="button">
                                <i className="fa fa-plus"></i>&nbsp;Add personnel</Button>*/}
                        </div>
                    </CardHeader>
                    <CardBody>
                        <BootstrapTable data={this.state.jobs} version="4" striped hover pagination search options={this.options}>
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
export default Jobs