import React from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const Disclaimer = () => {
    const [open, setOpen] = React.useState(true);

    const handleOpen = () => setOpen(!open);
    return (
        <>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader className='justify-center border-b border-blue-gray-500 text-white bg-blue-gray-800 rounded-ss-lg rounded-se-lg'>Disclaimer</DialogHeader>
                <DialogBody>
                    <p className="mb-5 text-sm font-bold text-justify">
                        Under the rules of the Bar Council of India, an advocate and/or a Law Firm is prohibited from soliciting work or advertising through communication in the public domain. This website is meant solely for the purposes of providing information and not for the purpose of advertising.
                    </p>
                    <p className="text-sm  font-bold text-justify">
                        This website does not solicit potential clients. The contents of this website are solely for the purposes of informing, assisting, and guiding the clients, associates, and other professionals and are not in any way a substitute for professional opinion or advice. Accessing this web site does not in any way create a client-attorney relationship. We urge you to seek advice from your professional counsellors before using any information in this website for your requirements.
                    </p>
                </DialogBody>
                <DialogFooter className='justify-conter'>
                    <div className="w-full text-center">
                    <Button variant="gradient" color="black" onClick={handleOpen}>
                        <span>Agree</span>
                    </Button>
                    </div>
                  
                </DialogFooter>
            </Dialog>
        </>
    )
}

export default Disclaimer
