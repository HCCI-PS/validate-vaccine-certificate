import React, {useState, useEffect} from "react";
import "./index.css";
import VerifyCertificateImg from "../../assets/img/verify-certificate.png"
import HexagonImg from "../../assets/img/hexagon.png"
import QRCodeImg from "../../assets/img/qr-code.svg"
import {CertificateStatus} from "../CertificateStatus";
import {CustomButton} from "../CustomButton";
import QRScanner from "../QRScanner";
import JSZip from "jszip";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";
import  { callMsGraph} from "../../graph";
export const CERTIFICATE_FILE = "certificate.json";

export const VerifyCertificate = () => {
    const {instance, accounts} = useMsal();
    const [graphData, setGraphData] = useState();
    const [result, setResult] = useState("");
    const [showScanner, setShowScanner] = useState(false);
    const request = {
        ...loginRequest,
        account: accounts[0]
    };

    useEffect(() => {        
        instance.acquireTokenSilent(request).then((response) => {        
        callMsGraph(response.accessToken).then(response => {
          setGraphData(response);
          })
        });
        
    }, []);

    const handleScan = data => {
        if (data) {
            const zip = new JSZip();
            zip.loadAsync(data).then((contents) => {
                return contents.files[CERTIFICATE_FILE].async('text')
            }).then(function (contents) {
                setResult(contents)
            }).catch(err => {
                    setResult(data)
                }
            );

        }
    };
    const handleError = err => {
        console.error(err)
    };
    return (
        <div className="container-fluid verify-certificate-wrapper">
            {
                !result &&
                <>
                    {!showScanner &&
                    <>
                        <img src={HexagonImg} style={{marginTop: "10px"}} className="banner-img" alt="Hexagon Logo" width="200"/>
                        {graphData && <p>Welcome {graphData.givenName}</p>}
                        <img src={VerifyCertificateImg} className="banner-img" alt="banner-img" height="150"/>
                        <h5 className="text-center">Verify vaccination certificate</h5>
                        <CustomButton className="green-btn" onClick={() => setShowScanner(true)}>
                            <span>Scan QR code</span>
                            <img className="ml-3" src={QRCodeImg} alt={""}/>
                        </CustomButton>                        
                    </>}
                    {showScanner &&
                    <>
                        <QRScanner onError={handleError}
                                   onScan={handleScan}/>
                        <CustomButton className="green-btn" onClick={() => setShowScanner(false)}>BACK</CustomButton>
                    </>
                    }
                </>
            }
            {
                result && <CertificateStatus certificateData={result} goBack={() => {
                    setShowScanner(false);
                    setResult("");
                }
                }/>
            }
        </div>
    )
};
