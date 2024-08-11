import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
const AllOpen = () =>{
    const [isoFormFlag, setFormFlag] = useState(false)

    return(
        <>
            <Button variant="primary">Create Task</Button>
            <Form>
                <h1>Status</h1>
                <h1/>
                <Form.Group>
                    <Form.Label>Task Status</Form.Label>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>Assigned</Dropdown.Item>
                            <Dropdown.Item>In Progress</Dropdown.Item>
                            <Dropdown.Item>Pending</Dropdown.Item>
                            <Dropdown.Item>On Hold</Dropdown.Item>
                            <Dropdown.Item>Rejected</Dropdown.Item>
                            <Dropdown.Item>Completed</Dropdown.Item>
                            <Dropdown.Item>Colsed</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>
            </Form>

        </>
    )
}

export default AllOpen