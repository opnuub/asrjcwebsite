import React, { useState } from 'react'
import { Col, Row, Button, Table, ListGroup, Form } from 'react-bootstrap'
import Message from '../components/Message'

function RPScreen() {

    const [first, setFirst] = useState("20")
    const [second, setSecond] = useState("20")
    const [third, setThird] = useState("20")
    const [fourth, setFourth] = useState("10")
    const [pw, setPW] = useState("10")
    const [gp, setGP] = useState("10")
    const [rp, setRP] = useState(1)


    const submitHandler = () => {
        if (first === '' || second === '' || third === '' || fourth === '' || pw === '' || gp === '') {
            setRP(0)
        } else {
            console.log(first)
            let one = parseFloat(first)
            let two = parseFloat(second)
            let three = parseFloat(third)
            let four = parseFloat(fourth)
            let project = parseFloat(pw)
            let general = parseFloat(gp)
            let total = one + two + three + four + project + general
            console.log(total)
            setRP(total)
        }
    }
    

    return (
        <Form onSubmit={submitHandler}>
            <Row>
                <Col>
                <label for='first'>1st H2 Grade</label>
                </Col>
                <Col>
                <Form.Group controlId='first'>
                    <Form.Select onChange={(e) => setFirst(e.target.value)} defaultValue="20">
                        <option value="20">A</option>
                        <option value="17.5">B</option>
                        <option value="15">C</option>
                        <option value="12.5">D</option>
                        <option value="10">E</option>
                        <option value="5">S</option>
                        <option value="0">U</option>
                    </Form.Select>
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <label for='second'>2nd H2 Grade</label>
                </Col>
                <Col>
                <Form.Group controlId='second'>
                    <Form.Select onChange={(e) => setSecond(e.target.value)} defaultValue="20">
                        <option value="20">A</option>
                        <option value="17.5">B</option>
                        <option value="15">C</option>
                        <option value="12.5">D</option>
                        <option value="10">E</option>
                        <option value="5">S</option>
                        <option value="0">U</option>
                    </Form.Select>
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                <label for='third'>3rd H2 Grade</label>
                </Col>
                <Col>
                <Form.Group controlId='third'>
                    <Form.Select onChange={(e) => setThird(e.target.value)} defaultValue="20">
                        <option value="20">A</option>
                        <option value="17.5">B</option>
                        <option value="15">C</option>
                        <option value="12.5">D</option>
                        <option value="10">E</option>
                        <option value="5">S</option>
                        <option value="0">U</option>
                    </Form.Select>
                </Form.Group>
                </Col>
            </Row><Row>
                <Col>
                <label for='fourth'>H1 Content Grade</label>
                </Col>
                <Col>
                <Form.Group controlId='fourth'>
                    <Form.Select onChange={(e) => setFourth(e.target.value)} defaultValue="10">
                        <option value="10">A</option>
                        <option value="8.75">B</option>
                        <option value="7.5">C</option>
                        <option value="6.25">D</option>
                        <option value="5">E</option>
                        <option value="2.5">S</option>
                        <option value="0">U</option>
                    </Form.Select>
                </Form.Group>
                </Col>
            </Row><Row>
                <Col>
                <label for='gp'>H1 GP Grade</label>
                </Col>
                <Col>
                <Form.Group controlId='gp'>
                    <Form.Select onChange={(e) => setGP(e.target.value)} defaultValue="10">
                        <option value="10">A</option>
                        <option value="8.75">B</option>
                        <option value="7.5">C</option>
                        <option value="6.25">D</option>
                        <option value="5">E</option>
                        <option value="2.5">S</option>
                        <option value="0">U</option>
                    </Form.Select>
                </Form.Group>
                </Col>
            </Row><Row>
                <Col>
                <label for='pw'>H1 PW Grade</label>
                </Col>
                <Col>
                <Form.Group controlId='pw'>
                    <Form.Select onChange={(e) => setPW(e.target.value)} defaultValue="10">
                        <option value="10">A</option>
                        <option value="8.75">B</option>
                        <option value="7.5">C</option>
                        <option value="6.25">D</option>
                        <option value="5">E</option>
                        <option value="2.5">S</option>
                        <option value="0">U</option>
                    </Form.Select>
                </Form.Group>
                </Col>
            </Row>
            <Button type='submit' variant='primary' className='mt-2 w-100'>Calculate RP</Button>
            {'\n'}
            {rp === 0 ? <Message variant='danger'>Input all your grades!</Message> : rp !== 1 ? <Message variant='success'>Your RP is: {rp}</Message> : <br></br> }
        </Form>
    )
}

export default RPScreen;