package com.nocountry.foodlyfinds.model.dto.response;

import com.nocountry.foodlyfinds.model.entity.StoreEntity;
import com.nocountry.foodlyfinds.model.entity.UserTblEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class QualificationResponse {

    private Long calificationId;
    private UserTblEntity user;
    private StoreEntity store;
    private  Integer value;

}
