import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Calculator = () => {
  const [value, setValue] = useState('');

  const backspace = () => {
    // if (typeof value === 'string') {
    //   setValue(value => value.slice(0, -1));
    // } else {
    //   setValue('');
    // }

    //or
    try {
      setValue(value.slice(0, -1));
    } catch (error) {
      setValue('');
    }
  };

  const calculate = () => {
    try {
      setValue(eval(value));
    } catch (error) {
      setValue('Error');
    }
  };

  return (
    <div>
      <div className="container my-2">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center text-primary">
              CALCULATOR
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card border-primary mb-3 pt-3 shadow">
              <div className="card-body text-primary">
                <input
                  type="text"
                  className="form-control form-control-lg mb-4 text-center bg-light fs-4 text-primary shadow"
                  placeholder={value}
                  onChange={e => setValue(e.target.value)}
                  disabled
                />
                <div className="row mt-2">
                  <div className="col-3">
                    <Button
                      className="text-primary shadow p-4 fs-4"
                      variant="light"
                      value="1"
                      onClick={e => setValue(value + e.target.value)}
                    >
                      1
                    </Button>
                  </div>
                  <div className="col-3">
                    <Button
                      className=" text-primary shadow p-4 fs-4"
                      variant="light"
                      value="2"
                      onClick={e => setValue(value + e.target.value)}
                    >
                      2
                    </Button>
                  </div>
                  <div className="col-3">
                    <Button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      variant="light"
                      value="3"
                      onClick={e => setValue(value + e.target.value)}
                    >
                      3
                    </Button>
                  </div>
                  <div className="col-3">
                    <Button
                      className="btn btn-light text-primary shadow px-2  py-4 fs-4"
                      value="c"
                      variant="light"
                      onClick={() => backspace()}
                    >
                      C/CE
                    </Button>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-3">
                    <Button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      variant="light"
                      value={4}
                      onClick={e => setValue(value + e.target.value)}
                    >
                      4
                    </Button>
                  </div>
                  <div className="col-3">
                    <Button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      variant="light"
                      value={5}
                      onClick={e => setValue(value + e.target.value)}
                    >
                      5
                    </Button>
                  </div>
                  <div className="col-3">
                    <Button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      variant="light"
                      value={6}
                      onClick={e => setValue(value + e.target.value)}
                    >
                      6
                    </Button>
                  </div>
                  <div className="col-3">
                    <Button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      value={'+'}
                      variant="light"
                      onClick={e => setValue(value + e.target.value)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-3">
                    <Button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      value={7}
                      variant="light"
                      onClick={e => setValue(value + e.target.value)}
                    >
                      7
                    </Button>
                  </div>
                  <div className="col-3">
                    <Button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      value={8}
                      variant="light"
                      onClick={e => setValue(value + e.target.value)}
                    >
                      8
                    </Button>
                  </div>
                  <div className="col-3">
                    <Button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      value={9}
                      variant="light"
                      onClick={e => setValue(value + e.target.value)}
                    >
                      9
                    </Button>
                  </div>
                  <div className="col-3">
                    <Button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      value={'*'}
                      variant="light"
                      onClick={e => setValue(value + e.target.value)}
                    >
                      X
                    </Button>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-3">
                    <Button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      variant="light"
                      value={'.'}
                      onClick={e => setValue(value + e.target.value)}
                    >
                      .
                    </Button>
                  </div>
                  <div className="col-3">
                    <Button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      value={0}
                      variant="light"
                      onClick={e => setValue(value + e.target.value)}
                    >
                      0
                    </Button>
                  </div>
                  <div className="col-3">
                    <Button
                      className="btn btn-light text-primary shadow p-4 fs-4"
                      value={'='}
                      variant="light"
                      onClick={() => calculate()}
                    >
                      =
                    </Button>
                  </div>
                  <div className="col-3">
                    <Button
                      className="btn btn-light text-primary shadow px-4 py-4 fs-4"
                      value={'/'}
                      onClick={e => setValue(value + e.target.value)}
                      variant="light"
                    >
                      /
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
