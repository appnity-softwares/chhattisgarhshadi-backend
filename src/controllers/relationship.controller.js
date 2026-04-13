import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { HTTP_STATUS } from '../utils/constants.js';
import relationshipService from '../services/relationship.service.js';

export const getRelationship = asyncHandler(async (req, res) => {
  const otherUserId = parseInt(req.params.userId, 10);
  const relationship = await relationshipService.getRelationship(
    req.user.id,
    otherUserId
  );

  res
    .status(HTTP_STATUS.OK)
    .json(
      new ApiResponse(
        HTTP_STATUS.OK,
        relationship,
        'Relationship retrieved successfully'
      )
    );
});

export const relationshipController = {
  getRelationship,
};

export default relationshipController;
