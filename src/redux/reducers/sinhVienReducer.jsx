import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	arrSinhVien: [
		{
			id:'1',
			hoten:'Nguyễn Văn A',
			phone:'02215424521',
			email:'nguyenvana@gmail.com'
		},
		{
			id:'2',
			hoten:'Nguyễn Văn B',
			phone:'0221542212',
			email:'nguyenvanb@gmail.com'
		}
	]
}

const sinhVienReducer = createSlice({
  name: 'sinhVienReducer',
  initialState,
  reducers: {
	addSinhVien:(state,action)=>{
		let userSinhVien = action.payload;
		state.arrSinhVien.push(userSinhVien)
	},
	deleteSinhVien:(state,action)=>{
		const del = [...action.payload]
		state.arrSinhVien=del
	},
  }
});

export const {addSinhVien,deleteSinhVien} = sinhVienReducer.actions

export default sinhVienReducer.reducer