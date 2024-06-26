import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';
import Header from "./header";
const Contact = () => {
    return (<>
    <Header/>
    <div className="contact">
    <Accordion className='accord'>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Assumenda cumque modi tempora explicabo quos architecto 
                        veritatis vero ratione. Dolores harum quas excepturi placeat 
              
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Assumenda cumque modi tempora explicabo quos architecto 
                        veritatis vero ratione. Dolores harum quas excepturi placeat 

                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Assumenda cumque modi tempora explicabo quos architecto 
                        veritatis vero ratione. Dolores harum quas excepturi placeat 
           
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Assumenda cumque modi tempora explicabo quos architecto 
                        veritatis vero ratione. Dolores harum quas excepturi placeat 
       
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Assumenda cumque modi tempora explicabo quos architecto 
                        veritatis vero ratione. Dolores harum quas excepturi placeat 
                       
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Assumenda cumque modi tempora explicabo quos architecto 
                        veritatis vero ratione. Dolores harum quas excepturi placeat 
                        
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Assumenda cumque modi tempora explicabo quos architecto 
                        veritatis vero ratione. Dolores harum quas excepturi placeat 
                        
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem >
                <AccordionItemHeading>
                    <AccordionItemButton>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Assumenda cumque modi tempora explicabo quos architecto 
                        veritatis vero ratione. Dolores harum quas excepturi placeat 
                        
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        <img src="../src/images/Starbucks_Logo.png.webp" alt="" />
        </div>
    </>);
}
 
export default Contact;