package com.nocountry.foodlyfinds.model.service;

import com.nocountry.foodlyfinds.exception.NotFoundException;
import com.nocountry.foodlyfinds.model.dto.StoreDTO;
import com.nocountry.foodlyfinds.model.entity.StoreEntity;

import java.util.List;

public interface StoreService {

    /**
     * Creates a new Store with the provided data.
     *
     * @param store The StoreEntity object containing the details of the new Store.
     */
    void create(StoreEntity store);

    /**
     * Returns a StoreDTO corresponding to the provided ID if the Store exists.
     *
     * @param id The ID of the Store to be retrieved.
     * @return The StoreDTO corresponding to the provided ID.
     * @throws NotFoundException If no Store with the provided ID is found.
     */
    StoreDTO getById(Long id) throws NotFoundException;

    /**
     * Updates an existing Store with the provided data in the store object.
     *
     * @param store The StoreEntity object with the updated data.
     * @throws NotFoundException If no Store with the provided ID is found.
     */
    void update(StoreEntity store) throws NotFoundException;

    /**
     * Deletes an existing Store with the provided ID.
     *
     * @param id The ID of the Store to be deleted.
     * @throws NotFoundException If no Store with the provided ID is found.
     */
    void deleteById(Long id) throws NotFoundException;

    /**
     * Returns a list of all Stores.
     *
     * @return A list of StoreDTOs representing all available Stores.
     */
    List<StoreDTO> findAll();
}
