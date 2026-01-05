
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import {useCallback, useState} from 'react';

export const useApiKey = () => {
  const [showApiKeyDialog, setShowApiKeyDialog] = useState(false);

  // For a standard deployment (like Vercel), we assume the API_KEY 
  // is provided via the environment as per the system instructions.
  const validateApiKey = useCallback(async (): Promise<boolean> => {
    return true; 
  }, []);

  const handleApiKeyDialogContinue = useCallback(async () => {
    setShowApiKeyDialog(false);
  }, []);

  return {
    showApiKeyDialog,
    setShowApiKeyDialog,
    validateApiKey,
    handleApiKeyDialogContinue,
  };
};
