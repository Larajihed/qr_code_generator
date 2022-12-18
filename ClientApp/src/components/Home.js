import React, { useEffect, useRef,useState } from 'react';

export function Home() {
    
    const inputRef = useRef();
    const [data, setData] = useState(null);
    const [src, setSrc] = useState('https://www.firstbenefits.org/wp-content/uploads/2017/10/placeholder.png')

    async function fetchData(text) {

        await fetch(`https://localhost:7055/api/QRCode/generator?text=${text}`)
            .then(response => response.blob())
            .then(blob => {
                const objectURL = URL.createObjectURL(blob);
                setSrc(objectURL)
            })
    }
   

    const handleSubmit = (e)=> {
    e.preventDefault()
    //rest of the code
        const inputValue = inputRef.current.value;
        fetchData(inputValue)
    }

    
    
    return (
      <div>
            <h1>QR Code Generator</h1>
            <p>THE 100% FREE QR CODE GENERATOR</p>
            <form onSubmit={handleSubmit} >
                <div class="form-group">
                    <label for="exampleInputEmail1">Link, Text to generate QR code</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={inputRef} placeholder="Enter link, text..." />
                    <small id="emailHelp" className="form-text text-muted mb-3">Link to open when scanned, e.g. https://example.com/</small>
                </div>
                <div className="text-center mb-3">
                    <input type="submit" value="Generate QR Code" className="btn btn-primary" />
                </div>
            </form>
            <div className="card" >
                <img className="card-img-top" src={src} alt="Card image cap" ></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">Link</span>
                        </div>
                        <input type="text" className="form-control disabled text-muted" value={src} ></input>
                    </div>
                    <div className="text-center">
                        <a href={src} className="btn btn-primary " download>Download</a>
                        <a href="#" className="btn btn-primary">Copy</a>
                    </div>
                    </div>
            </div>
        <p>To help you get started, we have also set up:</p>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
      </div>
    );
  
}
