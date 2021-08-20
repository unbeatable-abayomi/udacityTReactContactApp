//import React, { Component } from 'react'

import React from 'react';



export default function ListContacts(props) {
    return (
        <ol className="contact-list">
                    {props.contacts.map((contact)=>(
                         <li key={contact.id} className="contact-list-item">
                               
                              <div
                        className="contact-avatar"
                        style={{
                          backgroundImage: `url(${contact.avatarURL})`
                        }}
                      ></div>
                                
                           <div className = "contact-details">
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                           </div>
             <button onClick={()=> props.onDeleteContact(contact)} className="contact-remove">
                                    Remove
                               </button>
                            </li>
                        ))}
                 </ol>
    )
}

// export default class ListContacts extends React.Component {
//     render() {
//         console.log("Props",this.props)
//         return (
//             <ol className="contact-list">
//                 {this.props.contacts.map((contact)=>(
//                     <li key={contact.id} className="contact-list-item">
                       
//                        <div
//                 className="contact-avatar"
//                 style={{
//                   backgroundImage: `url(${contact.avatarURL})`
//                 }}
//               ></div>
                        
//                    <div className = "contact-details">
//                     <p>{contact.name}</p>
//                     <p>{contact.handle}</p>
//                    </div>
//                    <button onClick={()=> this.props.onDeleteContact(contact)} className="contact-remove">
//                                     Remove
//                                </button>
//                     </li>
//                 ))}
//             </ol>
//         )
//     }
// }

