import { 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalCloseButton, 
  ModalFooter, 
  Button, 
  FormControl, 
  FormLabel, 
  Input 
} from '@chakra-ui/react';

type EditProfileModalProps = {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    username: string;
    jobTitle: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

// Modal component for editing user profile information
export const EditProfileModal = ({ 
  isOpen, 
  onClose, 
  formData, 
  onInputChange, 
  onSubmit 
}: EditProfileModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} data-testid="edit-profile-modal">
      <ModalOverlay />
      <ModalContent bg="gray.800" borderColor="portal.300" borderWidth={2}>
        <form onSubmit={onSubmit} data-testid="edit-profile-form">
          <ModalHeader color="portal.300">Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Username input field */}
            <FormControl mb={4}>
              <FormLabel>Username</FormLabel>
              <Input 
                name="username" 
                value={formData.username} 
                onChange={onInputChange} 
                required 
                bg="gray.700"
                borderColor="portal.700"
                _hover={{ borderColor: "portal.500" }}
                _focus={{ borderColor: "portal.500", boxShadow: "0 0 0 1px #9f7aea" }}
                data-testid="username-input"
              />
            </FormControl>
            {/* Job title input field */}
            <FormControl>
              <FormLabel>Job Title</FormLabel>
              <Input 
                name="jobTitle" 
                value={formData.jobTitle} 
                onChange={onInputChange} 
                required 
                bg="gray.700"
                borderColor="portal.700"
                _hover={{ borderColor: "portal.500" }}
                _focus={{ borderColor: "portal.500", boxShadow: "0 0 0 1px #9f7aea" }}
                data-testid="job-title-input"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" mr={3} colorScheme="portal" onClick={onClose} data-testid="cancel-button">
              Cancel
            </Button>
            <Button colorScheme="portal" type="submit" data-testid="save-button">
              Save
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
} 