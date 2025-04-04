"use client";
import JsBarcode from "jsbarcode";
import React, { FC, useEffect, useRef, useState } from "react";

const BarcodeGen: FC = () => {
    const [text, setText] = useState('123456789012');
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      JsBarcode(svgRef.current, text, {
        format: 'CODE128',
        lineColor: '#000',
        width: 2,
        height: 100,
        displayValue: true,
      });
    }
  }, [text]);

  return <div className="flex flex-col items-center gap-4 p-6 bg-white rounded-2xl shadow-lg max-w-md mx-auto mt-10">
  <h1 className="text-2xl font-bold">Barcode Generator</h1>
  <input
    type="text"
    value={text}
    onChange={(e) => setText(e.target.value)}
    className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Enter barcode text"
  />
  <svg ref={svgRef} />
</div>;
};

export default BarcodeGen;
