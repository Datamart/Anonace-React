import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {

  render() {
    return (
      <div className="header">
        <table border="0">
          <tbody>
            <tr>
              <td width="33">
                <svg viewBox="0 0 33.4 33.4" width="32" xmlns="http://www.w3.org/2000/svg">
                  <path d="m16.2.5h1.15.12a26 26 0 0 1 4.13.5 21 21 0 0 1 4.66 1.4 12.79 12.79 0 0 1 4 2.7 8.63 8.63 0 0 1 2.1 3.46 10.21 10.21 0 0 1 .16 5.12 16.88 16.88 0 0 1 -1 3.17.2.2 0 0 0 .08.28 2.55 2.55 0 0 1 .88 3 4.26 4.26 0 0 1 -3 2.75.28.28 0 0 0 -.17.13c-.27.5-.54 1-.82 1.49a23.76 23.76 0 0 1 -3.72 4.92 13.4 13.4 0 0 1 -3.49 2.52 10.43 10.43 0 0 1 -3.42 1l-.7.07h-1.04l-.12-.01a10.64 10.64 0 0 1 -5.12-1.67 15.26 15.26 0 0 1 -3.5-3.11 28 28 0 0 1 -3.27-4.94c-.12-.23-.25-.42-.54-.44a4.34 4.34 0 0 1 -2.75-2.7 2.69 2.69 0 0 1 .83-3c.1-.07.25-.13.28-.23s-.07-.24-.11-.36a18.1 18.1 0 0 1 -1.16-5.48 9.51 9.51 0 0 1 .59-3.88 6.78 6.78 0 0 1 2.17-2.95 8.19 8.19 0 0 1 3.93-1.62 12.29 12.29 0 0 1 3.09 0 .29.29 0 0 0 .22-.07 11 11 0 0 1 1-.68 9.85 9.85 0 0 1 4.04-1.32zm.55 31.2a8.43 8.43 0 0 0 2.37-.36 10.42 10.42 0 0 0 4-2.37 19.08 19.08 0 0 0 3.05-3.66 34.4 34.4 0 0 0 2-3.48.19.19 0 0 1 .17-.11 3.5 3.5 0 0 0 .65-.08 2.79 2.79 0 0 0 2-2 1.36 1.36 0 0 0 -.54-1.64c-.35-.24-.26-.25-.61 0a5.84 5.84 0 0 0 -1.08 1.14c-.62.79-1.22 1.6-1.83 2.39a10.4 10.4 0 0 1 -1.79 1.78 5.39 5.39 0 0 1 -2.35 1.09 8.67 8.67 0 0 1 -3.55-.19 7.41 7.41 0 0 1 -1.86-.78 1.39 1.39 0 0 0 -1.47 0 7.52 7.52 0 0 1 -1.8.77 10 10 0 0 1 -2.6.3 5.09 5.09 0 0 1 -2.14-.46 7.39 7.39 0 0 1 -2.37-1.68 25.66 25.66 0 0 1 -1.75-2.15c-.44-.58-.89-1.15-1.36-1.7a6.54 6.54 0 0 0 -.74-.64.12.12 0 0 0 -.13 0 1.45 1.45 0 0 0 -.78 1.55 2.82 2.82 0 0 0 1.48 2 2.43 2.43 0 0 0 1.19.28.15.15 0 0 1 .15.1l.31.6a29.31 29.31 0 0 0 3 4.7 14.32 14.32 0 0 0 3.49 3.19 9 9 0 0 0 4.89 1.41zm-11.29-17.7h.75l4.44.21c1.8.07 3.6.18 5.4.19 1.52 0 3 0 4.57-.11 2.38-.1 4.76-.23 7.14-.34h.13a2.9 2.9 0 0 0 -1-1.16 6.75 6.75 0 0 0 -2-.95 26.7 26.7 0 0 0 -3.44-.76c-1.3-.23-2.61-.44-3.9-.7a13.23 13.23 0 0 1 -3.78-1.3 5.83 5.83 0 0 1 -2-1.76l-.08-.09a1.62 1.62 0 0 1 -.06.17 5.89 5.89 0 0 1 -1.13 1.9 8.48 8.48 0 0 1 -1.81 1.45c-.56.35-1.13.69-1.68 1.06a3.9 3.9 0 0 0 -1.08 1.1 3.62 3.62 0 0 0 -.47 1.09zm3.19 3.45v.13a3.22 3.22 0 0 0 1.16 2.42 2.64 2.64 0 0 0 1.72.68 3.55 3.55 0 0 0 2.17-.75 1.31 1.31 0 0 0 .53-.75.13.13 0 0 0 -.08-.19c-.43-.18-.85-.4-1.29-.56a16.41 16.41 0 0 0 -3.23-.8zm16 0h-.11a20 20 0 0 0 -3.34.67 10.84 10.84 0 0 0 -2 .81c-.09.05-.13.11-.08.2a2 2 0 0 0 .26.48 3 3 0 0 0 1.5.87 2.69 2.69 0 0 0 1.75 0 3.15 3.15 0 0 0 1.91-2 2.9 2.9 0 0 0 .1-1.01z"/>
                </svg>
              </td>
              <td><b>&nbsp; AnonAce</b></td>
              <td align="right">
                <a id="settings-button" title="Settings" href="/" onClick={this.props.toggleSidebar}>
                  <svg className="md-gear" width="24" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h20v20H0V0z"/>
                    <path d="M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/>
                  </svg>
                  <svg className="ios-gear" width="21" height="21" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                    <path d="M244.83,164.63c-4.76-.69-8.34-1.17-11.91-1.75-2.95-.49-5.09.26-6,3.37a16.25,16.25,0,0,1-1.23,2.84c-1.7,3.28-1.08,5.82,2,8s5.67,4.51,8.64,6.59c2.79,1.94,2.66,4,1,6.59-1.56,2.44-2.49,5.27-6.43,3.33-3.7-1.82-7.62-3.19-11.43-4.8-2.35-1-4.25-.59-5.74,1.57a35.21,35.21,0,0,1-2.36,3.07c-2.22,2.55-2.21,5,0,7.64,2.45,3,4.62,6.23,7.06,9.24,2.76,3.4-.13,5-2,7.08s-3.53,2.8-5.94.8c-3.19-2.64-6.57-5-9.82-7.6-2.15-1.69-4.07-1.59-6.31,0-6.7,4.87-6.77,4.9-3.65,12.66.91,2.28,1.74,4.6,2.82,6.8,1.46,3,.95,5-2.12,6.68s-5.34,3-7.75-.88c-2.05-3.27-4.73-6.14-7-9.27-1.53-2.09-3.29-2.75-5.68-1.63a21,21,0,0,1-3.23,1.31c-4.1,1.11-5,3.86-4.32,7.72.63,3.55,1,7.17,1.44,10.75.62,4.51-3,4.2-5.68,5.21s-4.14-.09-5.1-2.47c-1.5-3.72-3.06-7.41-4.54-11.13-1.09-2.77-2.78-4.3-6-3.34a10.54,10.54,0,0,1-2.69.32c-3.67.06-5.73,1.71-6,5.54-.3,3.6-1,7.17-1.33,10.77-.39,4.37-3.32,4.49-6.67,4.5s-4.55-1.54-4.8-4.67c-.3-3.86-1-7.68-1.45-11.53-.29-2.57-1.59-4-4.14-4.31-2.06-.24-4.11-.5-6.17-.7s-3.08,1-3.79,2.7c-1.65,3.79-3.46,7.53-4.82,11.42-1.53,4.38-4.47,3.23-7.56,2.49s-4.09-2.44-3.41-5.66C91.54,240,91.85,236,92.39,232a3.93,3.93,0,0,0-2.57-4.65c-1-.39-1.91-.78-2.86-1.19-5.26-2.28-5.79-2.15-9.39,2.41-2.16,2.74-4.35,5.47-6.42,8.28-2.58,3.5-4.91,1.07-7.38-.13s-3.53-2.74-2.24-5.55c1.73-3.76,3.12-7.66,4.81-11.44,1.13-2.54.58-4.3-1.6-6-6.58-5.23-6.54-5.3-13.38-.18-2.07,1.55-4.16,3.08-6.14,4.74-2.42,2-4.36,1.46-6.37-.69s-4.49-3.82-1.79-7.12c2.55-3.09,4.87-6.37,7.4-9.48,1.83-2.25,2.08-4.34,0-6.54a23.29,23.29,0,0,1-1.41-1.86c-3.56-4.65-3.77-4.71-9.35-2.48-3.23,1.29-6.5,2.52-9.69,3.94-2.92,1.31-4.3-.24-5.5-2.53s-3.49-4.54-.13-7S25,179.42,28.28,177c2.33-1.71,2.79-3.62,1.73-6.39-2.87-7.51-3.47-8-11.28-6.7-1.92.3-3.86.38-5.77.7-5.81,1-6,.72-7.6-4.7-1-3.14-.24-4.87,2.88-5.93,2.8-1,5.48-2.3,8.23-3.43,6.16-2.53,6.17-2.52,5.47-9.09-.54-5.17-1.4-6-6.68-6.66-3.46-.44-6.9-1.1-10.37-1.42-4-.36-3.75-3.09-3.8-5.91s.27-4.87,3.7-5.17c3.85-.34,7.67-1.11,11.53-1.45,3.15-.27,4.82-1.5,5.37-4.85,1.23-7.5,1.1-8-5.9-11.1-2.73-1.19-5.46-2.34-8.24-3.42-4-1.54-2.46-4.4-1.9-7.15s1.81-4.21,4.79-3.7,5.87.91,8.81,1.33c7.21,1,7.9.58,10.41-6.36A10.27,10.27,0,0,1,30,84.45c1.1-2.28.24-4-1.57-5.41-3.15-2.48-6.24-5.06-9.52-7.35-2.94-2.06-2.75-4.16-1.05-6.93s2.93-4.84,6.61-3c3.46,1.73,7.15,3,10.69,4.56,2.61,1.16,4.72,1,6.34-1.66a31.14,31.14,0,0,1,2.57-3.39c1.86-2.23,1.81-4.36,0-6.65-2.5-3.13-4.79-6.43-7.3-9.55-1.86-2.32-1.42-4.16.61-6.06s3.81-4.61,7.14-2c3.16,2.46,6.38,4.86,9.5,7.37,2.33,1.88,4.32,2,6.89.1,6.43-4.85,6.57-4.87,3.55-12.42-.91-2.28-1.76-4.59-2.88-6.77-1.66-3.24-.67-5.19,2.35-7s5.29-2.32,7.53,1c2.07,3.11,4.54,6,6.75,9,1.69,2.32,3.66,3.12,6.35,1.71a28.34,28.34,0,0,1,3.94-1.62c2.83-1,3.67-3,3.29-5.76-.54-4-.93-8-1.55-11.91s2.21-4.57,5-5.38S100,5,101.14,8c1.29,3.51,2.92,6.91,4.22,10.42,1.09,2.94,2.76,4.18,6.12,3.88,7.68-.69,8.17-1,9.12-8.52.39-3.07.85-6.14,1.32-9.2.65-4.26,4-3.1,6.68-3.33s4,1.17,4.36,3.75c.51,4,1.12,7.93,1.53,11.91.29,2.84,1.36,4.61,4.51,4.67a38.58,38.58,0,0,1,5,.65c2.43.36,3.92-.71,4.83-2.91,1.58-3.82,3.37-7.56,4.82-11.43,1.69-4.54,4.82-2.55,7.74-2s3.61,2.35,3.15,5.1c-.68,4-1,7.94-1.69,11.89-.41,2.57.47,4.13,2.84,5.22,7.84,3.63,7.83,3.68,13.3-3.2a57.7,57.7,0,0,0,4.27-5.52c2.11-3.47,4.47-2.94,7.51-1.25s4.25,3.39,2.55,6.78-2.86,6.93-4.41,10.34c-1.18,2.61-1.07,4.69,1.59,6.31a24.81,24.81,0,0,1,3.37,2.6c2.39,2.11,4.61,1.72,7-.14,3-2.41,6.3-4.56,9.24-7.07,2.76-2.35,4.56-1.09,6.58,1s4,3.82,1.45,6.85-4.86,6.38-7.37,9.51c-1.77,2.22-2.22,4.28-.07,6.53a32.68,32.68,0,0,1,2.87,3.65c1.65,2.29,3.65,2.5,6.13,1.43,3.56-1.53,7.27-2.73,10.77-4.38,4.21-2,5.37,1.08,7.1,3.71s.93,4.42-1.48,6.11c-3.17,2.23-6.13,4.76-9.26,7.06-2.2,1.61-2.89,3.52-1.71,6,.65,1.4,1.28,2.83,1.79,4.29,1,2.84,3,3.58,5.8,3.17,4-.59,8-.93,11.92-1.51,4.49-.66,4.41,2.83,5.35,5.55,1,2.89-.21,4.35-2.8,5.33-3.5,1.32-6.93,2.87-10.43,4.19-2.77,1-4,2.67-3.72,5.87.72,8.12.92,8.5,9,9.47,2.57.3,5.12.67,7.7.91,4.08.37,4.34,3.09,4.37,6.38s-1.18,4.78-4.39,5.09c-4,.39-7.93,1.06-11.91,1.49-2.39.26-3.85,1.26-4.05,3.8-.14,1.67-.36,3.34-.66,5-.59,3.14.93,4.81,3.7,5.88,3.25,1.26,6.38,2.84,9.67,4,3.07,1.07,4.54,2.61,3.5,6.05C249,162.57,248.56,166.18,244.83,164.63Zm-116.24,48.8a85.21,85.21,0,0,0,25.67-3.11c28.37-8.22,45.77-27.85,56.42-54.4,3.52-8.77-1.38-15.78-10.86-15.85-17.06-.14-34.11-.44-51.18-.29-8.93.08-14.67,3.88-18.89,11.09-2.81,4.79-5.55,9.62-8.36,14.41-6,10.15-12,20.23-17.87,30.42-3.9,6.75-2,12.29,5.19,15.36a24,24,0,0,0,4.81,1.36C118.5,213.4,123.55,213.31,128.59,213.43Zm-89-79.68c.12,17,9.07,36.21,23.32,53.29,2.24,2.69,5.27,3.18,8.46,2.58a12.5,12.5,0,0,0,8.81-6.36c8.54-14.77,16.92-29.64,25.8-44.2,4.55-7.45,4-14.45,0-21.56C97.74,102.73,89.33,88,80.91,73.35c-5.31-9.28-13.14-10.16-19.82-1.71C48,88.15,39.57,106.55,39.58,133.75Zm132.24-20.09c8.92,0,17.84.06,26.76,0,6.5,0,10.23-2.8,11.13-8a15,15,0,0,0-.92-8.39C202.17,81.4,193.39,67,179.55,56.4c-20.05-15.36-42.94-19.34-67.48-16-3.42.46-7,.54-9.22,4-2.94,4.65-2.79,9.22-.11,13.88,8.37,14.56,17,29,25,43.76C132,110,138.39,113.19,147,113.14"/>
                  </svg>
                </a>
                <a id="update-button" title="Update" href="/" onClick={this.props.reloadContent}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 23 23">
                    <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
