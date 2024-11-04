import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Download, Copy, MapPin } from 'lucide-react';

const Generator = () => {
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  });

  const [qrGenerated, setQrGenerated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQrGenerated(true);
  };

  const getAddressString = () => {
    return Object.values(address).filter(Boolean).join(', ');
  };

  const handleDownload = () => {
    const svg = document.getElementById('qr-code');
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx?.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.download = 'qrify-code.png';
        downloadLink.href = pngFile;
        downloadLink.click();
      };
      img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Generate Your QR Code</h1>
        <p className="text-xl text-gray-600">Enter your address details to create a custom QR code</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Street Address
              </label>
              <input
                type="text"
                value={address.street}
                onChange={(e) => setAddress({ ...address, street: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  value={address.city}
                  onChange={(e) => setAddress({ ...address, city: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State
                </label>
                <input
                  type="text"
                  value={address.state}
                  onChange={(e) => setAddress({ ...address, state: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ZIP Code
                </label>
                <input
                  type="text"
                  value={address.zipCode}
                  onChange={(e) => setAddress({ ...address, zipCode: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  value={address.country}
                  onChange={(e) => setAddress({ ...address, country: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <MapPin className="h-5 w-5" />
              <span>Generate QR Code</span>
            </button>
          </form>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
          {qrGenerated ? (
            <>
              <div className="mb-8">
                <QRCodeSVG
                  id="qr-code"
                  value={getAddressString()}
                  size={256}
                  level="H"
                  includeMargin={true}
                />
              </div>
              <div className="space-y-4 w-full">
                <button
                  onClick={handleDownload}
                  className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Download className="h-5 w-5" />
                  <span>Download PNG</span>
                </button>
                <button
                  onClick={() => navigator.clipboard.writeText(getAddressString())}
                  className="w-full border border-blue-600 text-blue-600 py-3 rounded-md hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Copy className="h-5 w-5" />
                  <span>Copy Address</span>
                </button>
              </div>
            </>
          ) : (
            <div className="text-center text-gray-500">
              <MapPin className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p>Your QR code will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Generator;