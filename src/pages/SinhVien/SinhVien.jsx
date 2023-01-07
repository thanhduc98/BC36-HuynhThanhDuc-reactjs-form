import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSinhVien, deleteSinhVien} from '../../redux/reducers/sinhVienReducer'


export default function SinhVien() {
  const dispatch = useDispatch();
  const { arrSinhVien } = useSelector(state => state.sinhVienReducer)
  const arrSinhVienRef = useRef({
    id: '',
    hoten: '',
    phone: '',
    email: ''
  })


  const handleChange = (e) => {
    const { id, value } = e.target;
    arrSinhVienRef.current[id] = value
  }

  const deleteSV = (id)=>{
    const deleteSV = arrSinhVien.filter(sv=>{return sv.id !== id})
    const action = deleteSinhVien(deleteSV)
    dispatch(action)
  }
  
  const editSV = (id)=>{
    
  }

useEffect(() => {
  const arr = [...arrSinhVien]
  localStorage.setItem('SinhVien', JSON.stringify(arr));
}, [arrSinhVien]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(arrSinhVienRef.current)
    const action = addSinhVien(arrSinhVienRef.current)
    dispatch(action)
  }

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <h3 className='text-white bg-dark py-2'>Thông tin sinh viên</h3>
        <div className="row">
          <div className="col-6">
            <div className="form-group ">
              <p>Mã SV</p>
              <input id='id' className="form-control" placeholder='2' onChange={handleChange} />
            </div>

          </div>
          <div className="col-6">
            <div className="form-group ">
              <p>Họ Tên</p>
              <input id='hoten' placeholder='Nguyễn Văn B' className="form-control" onChange={handleChange} />
            </div>

          </div>
          <div className="col-6">
            <div className="form-group ">
              <p>Số điện thoại</p>
              <input id='phone' placeholder='093822232232' className="form-control" onChange={handleChange} />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group ">
              <p>Email</p>
              <input id='email' placeholder='nguyenvanb@gmail.com' className="form-control" onChange={handleChange} />
            </div>
          </div>
        </div>
        <button className="btn btn-success my-2" type='submit'>Thêm sinh viên</button>
      </form>
      <table className='table'>
        <thead className='text-white bg-dark py-2'>
          <tr>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            arrSinhVien?.map((arr, index) => {
              return <tr key={index}>
                <th>{arr.id}</th>
                <th>{arr.hoten}</th>
                <th>{arr.phone}</th>
                <th>{arr.email}</th>
                <th>
                  <button className="btn btn-danger mx-2" onClick={()=>{deleteSV(arr.id)}}>Xoá</button>
                  <button className="btn btn-success mx-2" onClick={()=>{editSV(arr.id)}}>Chỉnh sửa</button>
                </th>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}
