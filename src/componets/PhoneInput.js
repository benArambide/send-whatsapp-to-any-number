import React, { useState } from 'react'
import { Input, Select } from 'antd'
import { countries } from 'country-data'
import { map, head, pipe, reject, isNil, addIndex } from 'ramda'
const defaultCode = '+51';

const PhoneInput = ({phoneChanged}) => {
  const mapIndexed = addIndex(map);
  const [number, setNumber] = useState('');
  const [code, setCode] = useState(defaultCode);

  const countriesInfo = pipe(
    mapIndexed((c, index) => ({value: head(c.countryCallingCodes), label: `${c.name} ${head(c.countryCallingCodes)}`, key: index })),
    reject((c) => isNil(c.value))
  )(countries.all);

  const onChangePhone = (code, phone) => {
    phoneChanged(`${code}${phone}`);
  };

  const handleNumberChange = e => {
    const { value } = e.target;
    if (/^\d+$/.test(value) || value === '') {
      setNumber(value)
      onChangePhone(code, value);
    }
  };

  const handleCodeChange = codeE => {
    setCode(codeE);
    onChangePhone(codeE, number);
  };

  return (
    <div>
      <Input.Group compact className="w-full flex flex-wrap">
        <div className="w-1/3">
          <Select defaultValue={defaultCode} size="large" className="w-full" options={countriesInfo}
            onChange={handleCodeChange}
            showSearch
            optionFilterProp="label"
          />
        </div>
        <div className="w-2/3" >
          <Input defaultValue="" size="large" onChange={handleNumberChange} value={number} />
        </div>
      </Input.Group>
    </div>
  )
};

export default PhoneInput;
