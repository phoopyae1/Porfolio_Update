import { useCallback } from 'react';

const Download = () => {
  const myphoto = '/PhooPyaePyaeSoe_PPPS\'sResume.pdf'; // Replace with the URL of your photo

  const handleDownload = useCallback(() => {
    const downloadLink = document.createElement('a');
    downloadLink.href = myphoto;
    downloadLink.download = myphoto;
    downloadLink.click();
  }, [myphoto]);

  return (
    <div className='w-[30%] rounded-lg bg-black h-10 mt-6'>
      <button onClick={handleDownload} className='p-2'>
        <p className='text-white'> Download My Resume </p>
      </button>
    </div>
  );
}

export default Download;