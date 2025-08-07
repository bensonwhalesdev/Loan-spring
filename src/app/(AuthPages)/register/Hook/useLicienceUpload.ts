import { useState } from 'react';

export default function useLicenseUpload() {
  const [licenseFrontName, setLicenseFrontName] = useState('');
  const [licenseBackName, setLicenseBackName] = useState('');
  const [licenseFrontData, setLicenseFrontData] = useState<string | null>(null);
  const [licenseBackData, setLicenseBackData] = useState<string | null>(null);

  const handleLicenseUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    side: 'licenseFront' | 'licenseBack'
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      if (side === 'licenseFront') {
        setLicenseFrontData(base64);
        setLicenseFrontName(file.name);
      } else {
        setLicenseBackData(base64);
        setLicenseBackName(file.name);
      }
    };
    reader.readAsDataURL(file);
  };

  return {
    licenseFrontName,
    licenseBackName,
    licenseFrontData,
    licenseBackData,
    handleLicenseUpload
  };
}
