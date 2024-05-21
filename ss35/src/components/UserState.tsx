import {useState} from 'react'

export default function UserState() {
    /**
     * hook là những cái hàm thôi , khi dùng hàm hàm để ý cho thầy
     * đầu vào của hàm , đầu ra trả về kết quả là j ?
     * 
     */
    const result=useState(0)
    console.log("giá trị useState",result);
    let arr =[5,6]
    
  return (
    <div>UserState</div>
  )
}
