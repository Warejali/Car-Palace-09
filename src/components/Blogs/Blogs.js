import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog-items max-w-4xl mx-auto mt-11'>

            <div className='blog-items my-5 bg-slate-700 hover:bg-slate-800 text-white py-5 px-10'>
                <h3 className='text-2xl font-w mb-2'>What is context API?</h3>
                <p>The Context API is a React structure that the way to create global variables that can be passed around the all levels of components without prop-drilling.  Context is mainly used when data needs to be accessible by different components at many nesting components. </p>
            </div>
            <div className='blog-items my-5 bg-slate-700 hover:bg-slate-800  text-white py-5 px-10'>
                <h3 className='text-2xl font-w mb-2'>What is Semantic tag? </h3>
                <p>A semantic element clearly describes its meaning about contents to both the browser and the developer. The semantic HTML tags inform to  browser and the develope about the contents of those tags.
                    <br /><small className='text-red-300'>Examples of semantic elements:  &lt;header&gt; , &lt;main&gt; , and &lt;article&gt;</small> </p>
            </div>
            <div className='blog-items my-5 bg-slate-700 hover:bg-slate-800 text-white py-5 px-10'>
                <h3 className='text-2xl font-w mb-5'>What different inline block between inline block element?</h3>
                <table className="p-5 border-collapse border border-slate-400 ...">
                    <thead>
                        <tr>
                            <th className="text-center p-3 border border-slate-300 ...">inline block</th>
                            <th className="text-center border border-slate-300 ...">inline block element</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 border border-slate-300 ...">inline-block It's formatted just like the inline element</td>
                            <td className="p-3 border border-slate-300 ...">A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-slate-300 ...">Inline elements occupy the space as needed within the space defined by the main element </td>
                            <td className="p-3 border border-slate-300 ...">Most common block elements are: &lt;p&gt; and &lt;div&gt;</td>
                        </tr>
                        <tr>
                            <td className="p-3 border border-slate-300 ...">One common use for display: inline-block is to display list items horizontally instead of vertically.</td>
                            <td className="p-3 border border-slate-300 ...">Block Elements occupy the full width irrespective of their sufficiency.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Blogs;