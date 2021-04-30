import React, { Component } from 'react'
import MaterialTable from 'material-table'

export const Table=()=>{
    const data=[ { name: 'Kosebasi Baku', place: '15/A Hasanoghlu, Bakı 1025, Azerbaýjan', imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipP49os1t-Hm1MgcnZ4Kl5minB-3coc_rROyyUlq=w260-h175-n-k-no' },
    { name: 'Ottoman', place: 'Strada Cuza Vodă 3, Chișinău, Moldowa', imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNq4Mn8Gojbz-Qlvqq2YtiwY4Q7Kvik4PT68eD-=w260-h175-n-k-no' },
    { name: 'Ziyade Turkish Restaurant & Butcher', place: '105 Davit Aghmashenebeli Ave, Tbilisi 0112, Gruziýa', imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipO8AhI5Hkc1QNqI3tlJcp3Ut4X0n3QBz3Jn692X=w260-h175-n-k-no' },
    { name: 'Villa Turkish Cuisine', place: 'Strada Cuza Vodă 3, Chișinău, Moldowa', imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNq4Mn8Gojbz-Qlvqq2YtiwY4Q7Kvik4PT68eD-=w260-h175-n-k-no' },
    { name: 'Pasha Turkish Restaurant', place: ' Behind Shining Towers - Mubarak Bin Mohammed St - Al KhalidiyahW9 - Abu Dhabi - Birleşen Arap Emirlikleri', imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipOoSUa0Q-UXCMho08nYKnY7l4HGlxm2nPDs7jXQ=w260-h175-n-k-no' },
    { name: 'Sultan Saray', place: 'CORNICHE AVENUE,Sheikh Humaid Bin Rashid Al Nuaimi Street AJMAN BEACH - Ajman - Birleşen Arap Emirlikleri', imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipOns_iFFfShwh7pB8PWE7Q_IN0FWE9O3z9Iq4ib=w260-h175-n-k-no' },
    { name: 'Lezzet Turkish Restaurant', place: 'La Mer Shop 411, S25 - Jumeirah 1 - Dubai - Birleşen Arap Emirlikleri', imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNjGZHP-u4X5MsjMJzPdJZW_ucq0wuwiJIzdO8=w260-h175-n-k-no' },
    { name: 'Kiyi - Turkish Restaurant', place: 'Sheikh Humaid Bin Rashid Al Nuaimi Street - Al OwanAl Nakhil 2 - Ajman - Birleşen Arap Emirlikleri', imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipOR9kvSYG3ngDYcYe8dfrHRL8-QCJHeFVLio4FM=w260-h175-n-k-no' }
    ]
    const columns=[
        { title: 'Photo', field: 'imageUrl', render: rowData => <img src={rowData.imageUrl} style={{width: 200, borderRadius: '10%'}}/> },
        { title: 'Name', field: 'name' },
        { title: 'Place', field: 'place' },
        
    ]
    return(
        <div>
            <MaterialTable title="List of Restaurants"
            data={data}
            columns={columns}
            options={{
                exportButton: true
              }}
            />
        </div>
    )
}