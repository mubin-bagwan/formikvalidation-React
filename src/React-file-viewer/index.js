import React from "react";
import FileViewer from 'react-file-viewer';

const getFileType = fileName => fileName.split(".").pop();

const ReactFileViewer = () => {
    const [filePath, setFilePath] = React.useState("");
    const [fileType, setFileType] = React.useState("");
    const containerRef = React.useRef(null);

    console.log(fileType, "filePath");

    function handleInputChange(e) {
        const file = e.target.files[0];
        setFilePath(URL.createObjectURL(file));
        setFileType(getFileType(file.name))
    }
    return (
        <>
            <div className="app">
                <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.docx,.csv,.xslx,.pdf"
                    onChange={handleInputChange}
                />
            </div>
            {
                fileType && filePath && (
                    <>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <div
                                ref={containerRef}
                                style={{
                                    width: "500px",
                                    height: "500px"
                                }}
                            >
                                <FileViewer
                                    fileType={fileType}
                                    filePath={filePath}
                                    errorComponent={<p>errorComponent</p>}
                                    onError={console.log("error occure")}
                                />
                            </div>
                        </div>
                    </>

                )
            };
        </>
    );
}

export default ReactFileViewer;