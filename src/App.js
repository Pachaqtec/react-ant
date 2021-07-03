import { useState } from 'react'
import { Input, Radio, Checkbox, DatePicker, Select, Form } from 'antd';
import './App.css';

const options = ['Hangzhou', 'Ningbo', 'Wenzhou']

const { RangePicker } = DatePicker
function App() {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [genero, setGenero] = useState('M')
  const [invalido, setInvalido] = useState(false)
  const [cumple, setCumple] = useState('')
  const [dateStart, setDateStart] = useState('')
  const [dateEnd, setDateEnd] = useState('')
  const [select, setSelect] = useState('')

  const [form] = Form.useForm();

  const handleChange = (e, cb) => {
    console.log('e', e.target.value)
    cb(e.target.value)
  }

  function onChange(date, dateString) {
    setCumple(dateString)
  }

  const onFinish = values => {
    console.log('Received values of form: ', values);
    console.log('cumple', form.getFieldValue('nombres'));
  };

  return (
    <div>
      <h1>Formulario</h1>
      <Form form={form} onFinish={onFinish} style={{ maxWidth: '500px', padding: '0 15px' }}>
        <Form.Item
          name="nombres"
          label="Nombres :"
          rules={[
            {
              whitespace: true,
              message: 'No pueden haber espacios vacios'
            },
            {
              required: true,
              message: 'Este campo es requerido',
            }
          ]}
        >
          <Input placeholder="Nombres" />
        </Form.Item>
        {/* 
        <Form.Item
          name="apellidos"
          label="Apellidos :"
          rules={[
            {
              required: true,
              message: 'Este campo es requerido'
            }
          ]}
        >
          <Input placeholder="Apellidos" />
        </Form.Item> */}
        {/* <Input placeholder="Apellidos" value={apellido} onChange={(e) => handleChange(e, setApellido)} />
        <br /><br />
        <Radio.Group onChange={(e) => handleChange(e, setGenero)} value={genero}>
          <Radio value='M'>Masculino</Radio>
          <Radio value='F'>Femenino</Radio>
        </Radio.Group>
        <br /><br />
        <Checkbox onChange={() => setInvalido(prevState => !prevState)}>Es inválido</Checkbox>
        <br /><br />
        <DatePicker onChange={onChange} format="DD-MM-YYYY" />
        <br /><br />
        <RangePicker
          // disabledDate={disabledDate}
          // disabledTime={disabledRangeTime}
          showTime={{
            hideDisabledOptions: true,
            // defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
            defaultValue: [dateStart, dateEnd]
          }}
          onCalendarChange={e => {
            setDateStart(e[0])
            setDateEnd(e[1])
          }}
          va
          format="YYYY-MM-DD"
        />
        <br /><br />
        <Select style={{ width: 120 }} value={select} onChange={(e) => setSelect(e)}>
          {options.map(item => (
            <Select.Option key={item}>{item}</Select.Option>
          ))}
        </Select> */}
      </Form>
    </div>
  );
}

export default App;
