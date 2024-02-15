package com.anjali.aurorahotel.service;

import com.anjali.aurorahotel.model.Room;
import com.anjali.aurorahotel.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.sql.rowset.serial.SerialBlob;
import java.io.IOException;
import java.math.BigDecimal;
import java.sql.Blob;
import java.sql.SQLException;

@Service
@RequiredArgsConstructor
public class RoomService implements IRoomService {
    private final RoomRepository roomRepository;
    @Override
    public Room addNewRoom(MultipartFile file, String roomType, BigDecimal roomPrice) throws IOException, SQLException {

        Room room = new Room();
        room.setRoomType(roomType);
        room.setRoomPrice(roomPrice);
        if(!file.isEmpty()){
            byte[] photoBytes =file.getBytes();
            Blob photoblob = new SerialBlob(photoBytes);
            room.setPhoto(photoblob);
        }
        return roomRepository.save(room);

    }
}
